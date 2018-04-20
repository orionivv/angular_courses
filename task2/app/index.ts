interface studParams {
	firtsName: string;
	lastName: string;
	year: number;
	score: Array<number>;
}
class Student {
	firtsName: string;
	lastName: string;
	year: number;
	score: Array<number>;
	attendance: Array<string>;
	constructor(p: studParams) {
		this.firtsName = p.firtsName;
		this.lastName = p.lastName;
		this.year = p.year;
		this.score = p.score;
		this.attendance = [];
	}
	getAge():number {
		return 2018 - this.year;
	}
	getAverageScore(): number {
		let sum: number = 0, 
				average: number = 0;
		this.score.forEach(el =>{
			sum += el
		})
		average = sum / this.score.length
		return average;
	}
	present(){
		if (this.attendance.length<=25){
			this.attendance.push('true');    
		} else {
				console.log('Err, length = 25');
		}
	}
	absent(){
		if (this.attendance.length<=25){
			this.attendance.push('false');    
		} else {
				console.log('Err, length = 25');
		}
	}
	getAverageVisit(): number{
		let count: number = 0;
		this.attendance.forEach(el =>{
			if (el === 'true'){
				count += 1;
			}
		})
		return count / (this.attendance.length + 1);
	}
	summary(){
		let averageScore: number = this.getAverageScore();
		let averageVisit: number = this.getAverageVisit();
		if (averageScore>=90 && averageVisit>=0.9){
			console.log("Ути какой молодчинка!");
		} else if (averageScore<90 && averageVisit<0.9){
			console.log("Редиска!");
		} else {
			console.log("Норм, но можно лучше");
		}
	}
}
const vlad = new Student({firtsName: 'Vlad', lastName:'Iliev', year: 1996, score: [25,150,51,20,100]});
const ivan = new Student({firtsName: 'Ivan', lastName:'Gusev', year: 1990, score: [51,52,200,63,82]});

vlad.present();
vlad.present();
vlad.present();
vlad.absent();
vlad.absent();

ivan.present();
ivan.present();
ivan.present();
ivan.absent();
ivan.present();

const group: Student[] = [vlad,ivan]

class Rating {
	arr: Array<Student>;
	constructor(p: Array<Student>){
		this.arr = p;
	}
	sortData(): Array<Student>{
		function sortAverage(a,b) {
			return a.averageVisit - b.averageVisit;
		}		
		let a = [];
		this.arr.forEach(function(el){
			a.push({
				firtsName: el.firtsName,
				lastName: el.lastName,
				averageVisit: el.getAverageVisit(),
				score: el.score
			})
			a.sort(sortAverage).reverse();
		})
		return a
	}
	attendance(name: string):number{
		if (name) {
			let data: Array<Student> = this.sortData();
			for (let i = 0; i < data.length; i++) {
				if(data[i].lastName===name) {
					return i + 1
				}
			}
		} else {
			let c = 0;
			this.arr.forEach(el => {
				c += el.getAverageVisit()
			});
			return c / this.arr.length;
		}
	}
	performance(name: string):object{
		if (name) {
			let data: Array<Student> = this.sortData();
			for (let i = 0; i < data.length; i++) {
				if(data[i].lastName===name) {
					return {palce: i + 1,score: data[i].score }
				}
			}
		} else {
			let c = 0;
			let score = []
			this.arr.forEach(el => {
				c += el.getAverageVisit()
				score.push(el.score)
			});
			return {averageGroupVisit: c / this.arr.length, score: score}
		}
	}
}
let res = new Rating(group);