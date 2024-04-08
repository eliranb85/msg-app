import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	public baseURL = 'http://www.localhost:5000/';
  constructor(private http: HttpClient) { }

  insertUser(user) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.post(this.baseURL + 'insertUser', user).subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
			}
		});
  }
  findUser(name) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'findUser?' + 'name=' + name).subscribe((data) => {
        resolve(data);
				});
			} catch (err) {
			}
		});
  }
  SendMassage(massage) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.post(this.baseURL + 'insertMessage', massage).subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
			}
		});
  }
  getMassage() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'getMassage?' ).subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
			}
		});
  }
  deleteMassage(id) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'deleteMessage?' + 'id=' + id).subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
			}
		});
  }
  findSentMassage(name) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'findSentMassage?' + 'name=' + name).subscribe((data) => {
        resolve(data);
				});
			} catch (err) {
			}
		});
  }
  findIncomeMassage(name) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'findIncomeMassage?' + 'name=' + name).subscribe((data) => {
        resolve(data);
				});
			} catch (err) {
			}
		});
  }
  getUser(){
    return new Promise(async (resolve, reject) => {
try {
  await this.http.get(this.baseURL + 'getUser').subscribe((data) => {
    resolve(data);
  });
} catch (err) {

}
});
}
}

