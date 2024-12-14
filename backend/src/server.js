import ngrok from 'ngrok';

const url = async () => { 
try {
        const url = await ngrok.connect({
           addr: process.env.PORT || 8000
        });
        console.log('Tunnel Created Successfully');
        return url;
} catch (error) {
        console.log('Error -> ', error);
}}

export { url };