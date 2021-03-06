const { Schema, model } = require('mongoose');

const colegioSchema = Schema({
    idColegio: {
        type: String,
        required:true
    },
    rbd: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required:true
    },
    direccion: {
        type: String,
        required:true
    },
    sostenedor: {
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required:true
    },
    cursos:[{
        type:Schema.Types.ObjectId,
        ref:'Curso'
    }],
    status: {
        type: Boolean,
        default: false
    }
});

colegioSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Colegio', colegioSchema );