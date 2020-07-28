import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css'
import {
    Modal, ModalHeader, ModalFooter, ModalBody, Button, Input
} from "reactstrap";
const { base_URL } = require('../../const')

export default function Forum(props) {
    const [reply, setReply] = useState('')
    const [name, setName] = useState('')
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        getComments()
    }, []);

    /**
     * Toggle post's detail-form
     */
    function toggleModal() {
        getComments()
        setToggle(!toggle)
        if (toggle === false) {
            setReply('')
            setName('')
        }
    }

    /**
     * Get all comments from db and filter by post's question
     */
    function getComments() {
        axios.get(base_URL + '/comment/get')
            .then(result => { setComments(result.data.filter((data)=>{return data.question===props.question})) })
            .catch((err) => { console.log(err) })
    }

    /**
     * Handle submition of comments to db
     */
    function submit() {
        if (reply.length < 1 || name.length < 2) alert('Please write a proper reply and name')
        else
            axios.post(base_URL + '/comment/post', {
                question: props.question,
                reply: reply,
                name: name
            })
                .then(() => {
                    getComments();
                    setReply('');
                    setName('');
                })
                .catch((err) => { console.log(err) })
    }

    /**
     * Delete one comment from any post
     * @param {String} selectedName : user's name of the comment
     * @param {String} selectedReply : the comment's content
     */
    function deleteOneComment(selectedName, selectedReply) {
        axios.post(base_URL + '/comment/delete', {
            reply: selectedReply,
            name: selectedName
        })
            .then(() => {
                getComments();
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <div className='box'>
                <h3 className='title'>{props.question}</h3>
                <div className= 'indv-post' onClick={() => { toggleModal() }}>
                    <h4 className='description'>{props.description.length < 100 ? props.description : props.description.slice(0, 90) + '...'}</h4>
                    <Button style={{float: 'right'}} color="info" onClick={() => props.delete()}><i className="fa fa-trash"/></Button>
                </div>
            </div>

            <Modal isOpen={toggle} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    {props.question}
                </ModalHeader>
                <ModalBody>
                    {props.description ? props.description : ''}
                </ModalBody>
                <ModalBody>
                    <p>Replies:</p>
                    {comments ? comments.map((reply, key) =>
                    <div>
                        <p key={key}>{reply.name}: {reply.reply}</p>
                        <p style={
                            { float: 'right', color: 'gray', cursor: 'pointer' }
                        } onClick={() => { deleteOneComment(reply.name, reply.reply) }}> delete </p>
                    </div>
                ) : ''}
                </ModalBody>
                <ModalFooter>
                    <Input placeholder='Your Name' onChange={(event => { setName(event.target.value) })} />
                    <Input type="textarea" placeholder='Reply' onChange={(event) => { setReply(event.target.value) }} />
                    <Button color="primary" onClick={() => submit()}>Submit</Button>{' '}
                    <Button color="secondary" onClick={() => toggleModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
