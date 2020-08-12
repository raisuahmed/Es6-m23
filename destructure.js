// const person = { name : 'rasel', age:17, job:'facebooker', phone: '01716035461', address:'mirpur Dhaka', gfName:'kona', friends: ['rafique','liton','Hasnat']};
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone);
// console.log(phone);


// const person = { name : 'rasel', age:17, job:'facebooker', phone: '01716035461', address:'mirpur Dhaka', gfName:'kona', friends: ['rafique','liton','Hasnat']};
// const {phone, gfName} = person;

// console.log(gfName, phone);
// console.log(phone);


// const friends = ['rasel','Liton','amir', 'afridi','Hasnat'];
// const [chotoFriends] = friends;
// console.log(chotoFriends);

// const friends = ['rasel','Liton','amir', 'afridi','Hasnat'];
// const [chotoFriend, ...restFriends] = friends;
// console.log(restFriends);


const complexObject = {
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'tigar'
    }
}

const{leader} = complexObject.info; 
console.log(leader);