// typescript  to javascript

var Student = /** @class */ (function () {
	function Student(p) {
			this.firtsName = p.firtsName;
			this.lastName = p.lastName;
			this.year = p.year;
			this.score = p.score;
			this.attendance = [];
	}
	Student.prototype.getAge = function () {
			return 2018 - this.year;
	};
	Student.prototype.getAverageScore = function () {
			var sum = 0, average = 0;
			this.score.forEach(function (el) {
					sum += el;
			});
			average = sum / this.score.length;
			return average;
	};
	Student.prototype.present = function () {
			if (this.attendance.length <= 25) {
					this.attendance.push('true');
			}
			else {
					console.log('Err, length = 25');
			}
	};
	Student.prototype.absent = function () {
			if (this.attendance.length <= 25) {
					this.attendance.push('false');
			}
			else {
					console.log('Err, length = 25');
			}
	};
	Student.prototype.getAverageVisit = function () {
			var count = 0;
			this.attendance.forEach(function (el) {
					if (el === 'true') {
							count += 1;
					}
			});
			return count / (this.attendance.length + 1);
	};
	Student.prototype.summary = function () {
			var averageScore = this.getAverageScore();
			var averageVisit = this.getAverageVisit();
			if (averageScore >= 90 && averageVisit >= 0.9) {
					console.log("Ути какой молодчинка!");
			}
			else if (averageScore < 90 && averageVisit < 0.9) {
					console.log("Редиска!");
			}
			else {
					console.log("Норм, но можно лучше");
			}
	};
	return Student;
}());
var vlad = new Student({ firtsName: 'Vlad', lastName: 'Iliev', year: 1996, score: [25, 150, 51, 20, 100] });
var ivan = new Student({ firtsName: 'Ivan', lastName: 'Gusev', year: 1990, score: [51, 52, 200, 63, 82] });
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
var group = [vlad, ivan];
var Rating = /** @class */ (function () {
	function Rating(p) {
			this.arr = p;
	}
	Rating.prototype.sortData = function () {
			function sortAverage(a, b) {
					return a.averageVisit - b.averageVisit;
			}
			var a = [];
			this.arr.forEach(function (el) {
					a.push({
							firtsName: el.firtsName,
							lastName: el.lastName,
							averageVisit: el.getAverageVisit(),
							score: el.score
					});
					a.sort(sortAverage).reverse();
			});
			return a;
	};
	Rating.prototype.attendance = function (name) {
			if (name) {
					var data = this.sortData();
					for (var i = 0; i < data.length; i++) {
							if (data[i].lastName === name) {
									return i + 1;
							}
					}
			}
			else {
					var c_1 = 0;
					this.arr.forEach(function (el) {
							c_1 += el.getAverageVisit();
					});
					return c_1 / this.arr.length;
			}
	};
	Rating.prototype.performance = function (name) {
			if (name) {
					var data = this.sortData();
					for (var i = 0; i < data.length; i++) {
							if (data[i].lastName === name) {
									return { palce: i + 1, score: data[i].score };
							}
					}
			}
			else {
					var c_2 = 0;
					var score_1 = [];
					this.arr.forEach(function (el) {
							c_2 += el.getAverageVisit();
							score_1.push(el.score);
					});
					return { averageGroupVisit: c_2 / this.arr.length, score: score_1 };
			}
	};
	return Rating;
}());
var res = new Rating(group);
