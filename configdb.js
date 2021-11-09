const user = 'david';
const pass = 'outfitapptpp';
const bdname = 'outfit'

module.exports ={
    port: process.env.port || 3000,
    db: `mongodb+srv://${user}:${pass}@cluster0.zjqg5.mongodb.net/${bdname}?retryWrites=true&w=majority`,
    SECRET_TOKEN:  'Tokensecretoparapruebadebd'

}