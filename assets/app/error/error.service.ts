import {Injectable ,EventEmitter} from '@angular/core';
import {Error} from './error.model';
@Injectable()
export class ErrorService{
	eventTriggered= new EventEmitter<Error>();
	handleError(error:any)
	{
		const errorData=new Error(error.title,error.error.message);
		this.eventTriggered.emit(errorData);
	}
}