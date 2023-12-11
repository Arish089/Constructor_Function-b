
function CreateAuthor(name,birthyear,nationality){
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;
};
let Author1 = new CreateAuthor('Martin',1970,'American');

function CreateBook(title,author,genre,price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.getbook = function(title){
        console.log(new CreateBook(this.title,this.author,this.genre,this.price))
    }
    
}
//function getbook(title = 'Ice And Blood'){
item = new CreateBook('Ice And Blood',Author1,'fantasy',3300);
item.getbook('Ice and blood');

