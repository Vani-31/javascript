const dog={
    name:"dog",
    breed:"labra",
    age:3,
    weightinpound:13,
    eat(){
        console.log('predigry')
    },
    bark(){
        console.log('bhau')
    }
}
function getDog(name, breed , age,weightinpound){
    return{
        name,
        breed,
        age,
        weightinpound,
        eat(){
            console.log(this.name + 'pedigery')
        },
        bark(){
            console.log(this.name +'bhau')
        }
    }
}
const dog2=getdog('tommy','bulldog',3,23)
dog2.bark()
console.log(dog2)