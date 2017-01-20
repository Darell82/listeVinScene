[var liste=[["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"],["A","B","C"]];
var tab = liste; /*fusion des deux listes*/

	
		for(var i=0; i<= tab.length-1; i++){
			var lignetab='<tr>'; // declare ma nouvelle ligne 
			for(var x= 0; x<= tab[i].length-1; x++){
				lignetab+='<td>'; // ajoute une colone a ma ligne
				lignetab+=tab[i][x]; // ajoute a cette colone la valeur
				lignetab+='</td>';
				//console.log(tab[i][x]); // ajoute dans la console la case 
			}
			lignetab+='</tr>';
			alert(tab[i]); //affichage ligne du tableau.
			document.getElementById('classement').innerHTML+=lignetab;
		}
