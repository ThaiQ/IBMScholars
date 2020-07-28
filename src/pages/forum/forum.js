import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './forum.css';
import Post from '../../components/post/post';
import UserNavbar from '../../components/navbar/navbar';
import {
  Modal, ModalHeader, ModalFooter, ModalBody, Button, Input, Container, Row, Col
} from "reactstrap";

const { base_URL } = require('../../const')

export default function Forum(props) {
  const [dataPosts, setDataPosts] = useState([])
  const [posts, setPosts] = useState(dataPosts);
  const [askToggle, setAskToggle] = useState(false);
  const [question, setQuestion] = useState('')
  const [descriptiontxt, setDescriptiontxt] = useState('')

  useEffect(() => {
    getPosts()
  }, []);

  /**
   * Search for posts with description or question
   * @param {string} value: value to search for
   */
  function search(value) {
    var lists = dataPosts.filter(function (post) {
      return (post.question.toLowerCase().includes(value.toLowerCase()) ||
        post.description.toLowerCase().includes(value.toLowerCase()));
    });
    setPosts(lists)
  }

  /**
   * Toggle creating new post's form
   */
  function toggleAsk() {
    setAskToggle(!askToggle)
    if (toggleAsk === false) {
      setQuestion('')
      setDescriptiontxt('')
    }
  }

  /**
   * Get all posts from database
   */
  function getPosts() {
    axios.get(base_URL + '/post/get')
      .then(result => { setDataPosts(result.data); setPosts(result.data) })
      .catch((err) => { console.log(err) })
  }

  /**
   * Activate when submit a new post
   */
  function submit() {
    if (question === '' || question.length < 10) alert('Please have a proper question')
    else {
      axios.post(base_URL + '/post/post', {
        question: question,
        description: descriptiontxt ? descriptiontxt : ''
      })
        .then(() => { getPosts(); toggleAsk() })
        .catch((err) => { console.log(err) })
    }
  }

  /**
   * Delete a post base on its question (also delete all comments of that post in DB)
   * @param {String} postQuestion : question of the post to delete
   */
  function deletePost(postQuestion) {
    axios.post(base_URL + '/post/delete', {
      question: postQuestion,
      description: descriptiontxt ? descriptiontxt : ''
    })
      .then(() => {
        getPosts()
        axios.post(base_URL + '/comment/delete', {
          question: postQuestion
        }).catch((err) => { console.log(err) })
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <div className='app'>
      <UserNavbar />     
      <h1>Blank Space Ignore</h1>
      <div className = 'side-design'>
      <Container className = 'posts-container'><h1 className = 'community-header'>Community Forum</h1>
      <Row>
        <Col>
          <input className='form-search' placeholder='Search For Posts' onChange={(event) => { search(event.target.value) }} />
        </Col>
        <Col>
        <Button className = 'ask-q-button' color="warning" onClick={() => toggleAsk()}><span>Ask a Question</span></Button>
        </Col>
      </Row>
      
      <br />  

      {
        posts.map((post, ixd) => {
          return <Post key={ixd} replies={post.replies} delete={() => { deletePost(post.question) }}
            question={post.question} description={post.description} />
        })
      }

      <Modal isOpen={askToggle} toggle={toggleAsk}>
        <ModalHeader toggle={toggleAsk}>
          Ask a question
        <Input onChange={(event) => { setQuestion(event.target.value) }} placeholder='What is your Question?' />
        </ModalHeader>
        <ModalBody>
          <Input onChange={(event) => { setDescriptiontxt(event.target.value) }}
            type="textarea" placeholder='Some Description (optional)' />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => submit()}>Submit</Button>{' '}
          <Button color="secondary" onClick={() => toggleAsk()}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </Container>
      </div>
    </div>
  );
}
