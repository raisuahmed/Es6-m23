// class student{

// }
// const student1 =new student();
// const student2 = new student();
// console.log(student1, student2);

// //with Property:
// class student{
//     constructor(){
//         this.id = 1;
//         this.name = 'rasel'
//     }
//     }
//     const student1 =new student();
//     const student2 = new student();
//     console.log(student1, student2);



    class student{
        constructor(sId, sName){
            this.id = sId;
            this.name = sName;
            this.school = 'Dashuria mm high school'
        }
        }
        const student1 =new student(12, 'rasel');
        const student2 = new student(13, 'kona');
        console.log(student1, student2);