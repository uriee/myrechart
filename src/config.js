
export const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#0088FE','#91bfdb','#2c8d59','#448ec3', '#F0C49F', '#0FBB28', '#0F8042', '#F088FE','#F1bfdb','#Fc8d59','#F48ec3'];
export const getLegendData = function(data){
	const groups = data.map(function(item){return item.GROUPS}).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
	return groups.map(function(item,i){return {label: item, color: COLORS[i%COLORS.length]}});
};

export const getbardata  = function(data) {
    const x = data.map(function(item){return item.X}).filter(function(item, i, ar){ return ar.indexOf(item) === i; });      
    const table = x
                  .map(function(q1,i){return Object.assign({X:q1},data
                      .filter(function(q2){return q2.X===q1})
                      .reduce(function(w,q){w[q.GROUPS]=q.Y; return w},{})
                      )}
                    ) ;
    const y = data.map(function(item){return item.GROUPS}).filter(function(item, i, ar){ return ar.indexOf(item) === i; }) ;       
    const groups = y.map(function(item,i){ return {name: item, stack: 'a'}});
    return {bardata:table, groups:groups};
};

export const getcolumnes  = function(data) {
	var ret = []
	for (var x in data[0]) {
		ret.push({header:x, accessor: x,headerStyle:'font-size:30;'})
	}
	return ret;        
};

export const getpiedata = function(data){
    const x = data.map(function(item){return item.X}).filter(function(item, i, ar){ return ar.indexOf(item) === i; });  
    const groups = data.map(function(item){return item.GROUPS}).filter(function(item, i, ar){ return ar.indexOf(item) === i; }) ;         
    const piex = x
                  .map(function(q1,i){return Object.assign({name:q1},data
                      .filter(function(q2){return q2.X===q1})
                      .reduce(function(w,q){return {value: w['value'] + q.Y}},{value:0})
                      )}
                    ) ;
    const piegroups = groups
                  .map(function(q1,i){return Object.assign({name:q1},data
                      .filter(function(q2){return q2.GROUPS===q1})
                      .reduce(function(w,q){return {value: w['value'] + q.Y}},{value:0})
                      )}
                    ) ;                  
   return {piex,piegroups};
}; 