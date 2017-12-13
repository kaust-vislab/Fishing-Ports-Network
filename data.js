function drawdata(){
// var str= "Id,UserName \n 1,Sam Smith \n  2,Fred Frankly \n 1,Zachary Zupers"
// console.log(CSV2JSON(str));
// console.log("in draw data ");
jsonnodes=[]; jsonedges=[];
var fishmap=[];
var portsmap=[];

d3.text("ports.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
    //console.log(row[2]); 
    var tmp ={"id": row[0],"svgPath": targetSVG,"title": "Ports","latitude": row[2], "longitude": row[1],"color": "#32CD32","scale": 0.6};
    jsonnodes.push(tmp);
    portsmap[row[0]+'s'] = {"latitude": row[2], "longitude": row[1]};
    // return row.map(function(value) {
    //   return +value;
    // });
  });
});
d3.text("fishing_hotspots.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
    //console.log(row[2]); 
    var tmp;
     // var sc= (fishnodes_size[row[2]-1]/239 <1) ?  1: fishnodes_size[row[2]-1]/239; console.log(sc); 
    if(!false) {  tmp ={"id": row[2],"svgPath": targetSVG,"title": "Fishing Hotspot","latitude": row[1], "longitude": row[0],"color": "#FF0000","scale": fishnodes_scale[row[2]-1]};} // !clusters   
    else {tmp={"id": row[2],"svgPath": targetSVG,"title": "Fishing Hotspot","latitude": row[1], "longitude": row[0],"color": colorar[row[2]-1],"scale": 2 };}
    jsonnodes.push(tmp);
    fishmap[row[2]+'s'] = {"latitude": row[1], "longitude": row[0]};
    // return row.map(function(value) {
    //   return +value;
    // });
  });
  // console.log(fishmap);
  // console.log(portsmap);
  // console.log(jsonnodes);

});

d3.text("edges.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
  var fishlat= fishmap[row[0]+'s'].latitude;
  var fishlng= fishmap[row[0]+'s'].longitude;
  if(portsmap[row[1]+'s']){
   var portlat= portsmap[row[1]+'s'].latitude;
   var portlng= portsmap[row[1]+'s'].longitude;
  }
  var latarray = [portlat, fishlat];
  var lngarray = [portlng, fishlng];
  if(!false) {jsonedges.push({"latitudes": latarray, "longitudes": lngarray, "color": "#4169E1"});}
  else  { jsonedges.push({"latitudes": latarray, "longitudes": lngarray, "color": colorar[row[0]-1]});}

         if(jsonedges.length ==1103){drawmap(jsonnodes,jsonedges);}
  });
     //console.log(fishnodes_size); 
});
}


function drawdata_cluster(){
// var str= "Id,UserName \n 1,Sam Smith \n  2,Fred Frankly \n 1,Zachary Zupers"
// console.log(CSV2JSON(str));
// console.log("in draw data ");
jsonnodes_clus=[]; jsonedges_clus=[];
var fishmap=[];
var portsmap=[];

d3.text("ports.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
    //console.log(row[2]); 
    var tmp ={"id": row[0],"svgPath": targetSVG,"title": "Ports","latitude": row[2], "longitude": row[1],"color": "#32CD32","scale": 0.6};
    jsonnodes_clus.push(tmp);
    portsmap[row[0]+'s'] = {"latitude": row[2], "longitude": row[1]};
    // return row.map(function(value) {
    //   return +value;
    // });
  });
});
d3.text("fishing_hotspots.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
    //console.log(row[2]); 
    var tmp;
    if(false) {  tmp ={"id": row[2],"svgPath": targetSVG,"title": "Fishing Hotspot","latitude": row[1], "longitude": row[0],"color": "#FF0000","scale": 2};} // !clusters
    else {tmp={"id": row[2],"svgPath": targetSVG,"title": "Fishing Hotspot","latitude": row[1], "longitude": row[0],"color": colorar[row[2]-1],"scale": fishnodes_scale[row[2]-1]};}
    jsonnodes_clus.push(tmp);
    fishmap[row[2]+'s'] = {"latitude": row[1], "longitude": row[0]};
    // return row.map(function(value) {
    //   return +value;
    // });
  });
  // console.log(fishmap);
  // console.log(portsmap);
  // console.log("fidshing "+jsonnodes);
});

d3.text("edges.csv", function(text) {
  var data = d3.csv.parseRows(text).map(function(row) {
  var fishlat= fishmap[row[0]+'s'].latitude;
  var fishlng= fishmap[row[0]+'s'].longitude;
  if(portsmap[row[1]+'s']){
   var portlat= portsmap[row[1]+'s'].latitude;
   var portlng= portsmap[row[1]+'s'].longitude;
  }
  var latarray = [portlat, fishlat];
  var lngarray = [portlng, fishlng];
  if(false) {jsonedges_clus.push({"latitudes": latarray, "longitudes": lngarray, "color": "#4169E1"});}
  else  { jsonedges_clus.push({"latitudes": latarray, "longitudes": lngarray, "color": colorar[row[0]-1]});}
  });
   // console.log("fedges "+jsonedges);
});
}