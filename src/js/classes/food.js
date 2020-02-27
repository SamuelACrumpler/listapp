class food {
	constructor(i,n,t,r){
		this._id = i;
		this._name = n;
		this._type = t;
		this._rating = r;

	}

	get id() {
		return this._id;
	}

	set id(x) {
		this._id = x;
	}


	get name() {
		return this._name;
	}

	set name(x) {
		this._name = x;
	}

	get type() {
		return this._type;
	}

	set type(x) {
		this._type = x;
	}

	get rating() {
		return this._rating;
	}

	set rating(x) {
		this._rating = x;
	}


	print() {
		console.log("_id:" + this._id);
		console.log("_name:" + this._name);
		console.log("_type" + this._type);
		console.log("_rating" + this._rating);

	}
}

export default food;