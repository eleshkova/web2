'use strict';

let Instrument = require('./instrument.js');
let Orchestra =require('./orchestra.js');
let Musician =require('./musician.js');

let orchestraList=[];
let instrumentList=[];
let musicianList=[];
let id=0;

$(document).ready( function () {
    $(".error").hide();
    $(document).on("click", "#new_orchestra", function () {
        newOrchestra();
    });
    $(document).on("click", "#new_instrument", function () {
        newInstrument();
    });
    $(document).on("click", "#new_musician", function () {
        newMusician();
    });
    $(document).on("click", ".delete_musician", function () {
        deleteMusician(this.id);
    });
    $(document).on("click", ".change_musician", function () {
        changeMusician(this.id);
    });
    $(document).on("click", ".saveChanges", function () {
        saveChanges(this.id);
    });
});

function newOrchestra(){
    let typeO=$("#typeO").val();
    let orchestra= new Orchestra(typeO, id);
    if(!validO(typeO)) {
     $(".errorOrchestra").show();
     }
    else {
        ++id;
        $(".errorOrchestra").hide();
        orchestraList.push(orchestra);
        console.log(orchestraList);
        addOrchestra(orchestraList);
    }
};

function validO(type){
    if (type.length>0){
        return true;
    }
else return false;
};

function validI(name){
    if (name.length>0){
        return true;
    }
    else return false;
};

function validM(name, exp){
    if (name.length>0 && (0+exp)>0){
        return true;
    }
    else return false;
}

function addOrchestra(orchestraList){
    let templateOrchestra = Handlebars.compile( $("#templateOrchestra").html()  );
    $(".orchestradrop").empty().append( templateOrchestra(orchestraList) );
};
    function newInstrument(){
        let nameI=$("#nameI").val();
        let instrument= new Instrument(nameI, id);
        if(!validI(nameI)) {
            $(".errorInstrument").show();
        }
        else {
            ++id;
            $(".errorInstrument").hide();
            instrumentList.push(instrument);
            console.log(instrumentList);
            addInstrument(instrumentList);
        }
    };
    function addInstrument(instrumentList){
        let templateInstrument = Handlebars.compile( $("#templateInstrument").html()  );
        $(".instrumentdrop").empty().append( templateInstrument(instrumentList) );
    };
function newMusician(){
    let orchestra=$(".orchestradrop").val();
    let instrument=$(".instrumentdrop").val();
    let nameMus=$("#nameMus").val();
    let expMus=$("#experienceMus").val();
    let orch;
    let instr;
        for (let i = 0; i < orchestraList.length; ++i) {
            console.log
            if (orchestraList[i].id == orchestra) {
                orch = orchestraList[i];
                break;
            }
        }
        for (let j = 0; j < instrumentList.length; ++j) {
            console.log
            if (instrumentList[j].id == instrument) {
                instr = instrumentList[j];
                break;
            }
        }
        let musician = new Musician(orch, instr, nameMus, expMus, id);
    if(!validM(nameMus, expMus)) {
            $(".errorMusician").show();
        }
        else {
            $(".errorMusician").hide();
        ++id;
        musicianList.push(musician);
        console.log(musicianList);
        addMusician(musicianList);
    }
};
function addMusician(musicianList){
    let templateMusician = Handlebars.compile( $("#templateMusician").html()  );
    $(".musicianlist").empty().append( templateMusician(musicianList) );
}
function deleteMusician(id) {
    for(let i = 0; i < musicianList.length; ++i) {
        if(musicianList[i].id == id) {
            musicianList.splice(i,1);
            break;
        }
    }
    $("#"+id).remove();
};
function changeMusician(id){
    let i;
    for(i=0; i<musicianList.length; ++i)
    {
        if(musicianList[i].id==id)
            break;
    }
    addOrchestra(orchestraList);
    let templateChange = Handlebars.compile( $("#templateChange").html()  );
    $('#'+id).empty().append( templateChange(musicianList[i]) );
};
function saveChanges(id){
    let i;
    let orchestra=$("#change_orchestra").val();
    let instrument=$("#change_instrument").val();
    let nameMus=$("#change_name").val();
    let expMus=$("#change_experience").val();
    let orch;
    let instr;
    for(let k = 0; k < orchestraList.length; ++k) {
        console.log
        if(orchestraList[k].id == orchestra){
            orch = orchestraList[k];
            break;
        }
    }
    for(let j = 0; j < instrumentList.length; ++j) {
        console.log
        if(instrumentList[j].id == instrument){
            instr =instrumentList[j];
            break;
        }
    }
    for(i=0; i<musicianList.length; i++)
    {
        if(musicianList[i].id==id)
            break;
    }
    musicianList[i].name=nameMus;
    musicianList[i].experience=expMus;
    musicianList[i].orchestra=orch;
    musicianList[i].instrument=instr;
    console.log(musicianList);
    addMusician(musicianList);
};
