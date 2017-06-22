import {Message} from './message.model';
import {OnInit,EventEmitter,Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
@Injectable()

export class MessageService{

	private message:Message[]=[];
	messageChanged=new EventEmitter<Message[]>();
	editMessage = new EventEmitter<Message>();
	constructor(private http:Http){}
	ngOnInit(){
	}
	getMessage(){
		const headers= new Headers({'Content-Type':'application/json'});
		return this.http.get('http://localhost:8000/message',{headers:headers})
			.map((response:Response)=>{
				const messages=response.json().obj;
				let transformedMessages:Message[]=[];
				for(let message of messages){
					transformedMessages.push(new Message(message.message,message._id));
				}
				this.message=transformedMessages;
				//console.log(response.json().obj);
				//this.messageChanged.emit(this.message.slice());
				return transformedMessages;
			}).catch((error:Response)=>Observable.throw(error);
	}
	addMessage(message:Message){
		this.message.push(message);
		const body=JSON.stringify(message);
		const headers= new Headers({'Content-Type':'application/json'});
		this.messageChanged.emit(this.message.slice());
		return this.http.post('http://localhost:8000/message',body,{headers:headers})
			.map((response:Response)=>response.json())
			.catch((error:Response)=>Observable.throw(error);//this is observable

	}
	deleteMessage(id:string){
		const headers=new Headers({'Content-Type':'application/json'});
		return this.http.delete('http://localhost:8000/messageDelete/'+id,{headers:headers})
			.map((response:Response)=>{
				this.message.splice(this.message.findIndex(x=>x.id==id),1);
				response.json()})
			.catch((error:Response)=>Observable.throw(error));
	}
	OneditMessage(message:Message){
		this.editMessage.emit(message);
		//this.deleteMessage(message);
	}
	OnUpdateMessage(message:Message)
	{
		const body = JSON.stringify(message);
		const headers=new Headers({'Content-Type':'application/json'});
		return this.http.patch('http://localhost:8000/updateMessage/'+message.id,body,{headers:headers})
			.map((response:Response)=>{
				console.log(response);
				response.json()})
			.catch((error:Response)=>Observable.throw(error));
	}
} 