const url = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/cc1b6708-fe36-4b19-8615-a85750058dae'
const key = 'DvPekZwnLgosa4QIb5fYFR7wevOefbheGw1nZ6nf9hie'

const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: key,
    }),
    url: url,
});

/**
 * Array to translate:
 * fileName: name of the mp3 file (that will be save under ./mp3 folder)
 * txt: text to translate to speech
 * 
 * Run "node txtTOspeech.js" in this mp3 folder (remember to cd into it)
 */
const txtToTranslate = [
    {
        fileName: 'a',
        txt: 'a'
    },
    {
        fileName: 'b',
        txt: 'b'
    }
]

txtToTranslate.forEach(file => {
    let path = './mp3/' + file.fileName + '.mp3'
    try {
        if (fs.existsSync(path)) console.log(path + ' is already existed')
        else {
            const synthesizeParams = {
                text: file.txt,
                accept: 'audio/mp3',
                voice: 'en-US_AllisonV3Voice',
            };

            textToSpeech.synthesize(synthesizeParams)
                .then(response => {
                    // only necessary for wav formats,
                    // otherwise `response.result` can be directly piped to a file
                    return textToSpeech.repairWavHeaderStream(response.result);
                })
                .then(buffer => {
                    fs.writeFileSync(`./mp3/${file.fileName}.mp3`, buffer);
                })
        }
    } catch (err) {
        console.error(err)
    }
});
