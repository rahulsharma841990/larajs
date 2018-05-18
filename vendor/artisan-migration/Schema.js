


class Schema{

    constructor(){
        this.columns = [];
        this.engine = 'InnoDB';
        this.charset = 'utf8';
        this.collation = 'utf8_unicode_ci';
        this.primary = false;
        this.auto_increment = false;
        this.table = '';
        this.columnLength = 255;
        this.base_query = 'CREATE TABLE [table]([columns])';
        //this.query.push('CREATE TABLE');
    }

    create(table, callback){
        this.table = table;
        callback(this);
    }

    increments(column){
        this.primary = true;
        this.auto_increment = true;
        let columnObject = {
            column: column,
            type: 'int(10)'
        }
        this.columns.push(column);
        console.log(this.columns);
        //console.log('Called increment');
    }

    string(column,length = 255){
        this.columns.push(column+' varchar()');
        console.log(this.columns);
        return this;
    }

    integer(column){
        this.columns.push(column+' int');
        //console.log('Called Integer');
    }

    bigIncrements(column){

    }

    bigInteger(column){

    }
}

module.exports = new Schema;