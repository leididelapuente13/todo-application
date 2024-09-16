const tinyIntToBoolean =(statusInTinyInt)=>{
	if(statusInTinyInt === 0){
		return false;
	}else if(statusInTinyInt === 1){
		return true;
	}
}

const booleanToTinyInt = (statusInBoolean)=>{
	if(statusInBoolean === true){
		return 1;
	}else if(statusInBoolean === false){
		return 0;
	}
}

export {tinyIntToBoolean, booleanToTinyInt}