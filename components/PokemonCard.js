import {View, Text, StyleSheet, Platform,Image} from "react-native";


export default function PokemonCard ({name,
    image,
    type,
    hp,
    moves,
    weaknesses}
    
) 

// Cette ligne exporte par défaut la fonction PokemonCard, ce qui permet de l'utiliser dans d'autres 
// fichiers du projet. Les arguments attendus sont les propriétés nécessaires pour afficher la carte 
// d'un Pokémon : name, image, type, hp, moves, et weaknesses.


{
    
    return (
        <View style={styles.card} >
            <View style={styles.namecontainer}>
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.hp}> ❤️{hp}</Text>
            </View>

            <View>
            {/* L'image est affichée en utilisant le composant Image de React Native, */}
             {/* avec une balise d'accessibilité pour décrire l'image. */}
                <Image style={styles.image} source={image} accessibilityLabel={`${name}pokemon`} 
                    resizeMode="contain"
                />
            </View>

            <View>
                <Text>{type}</Text>
            </View>

            <View>
                <Text> Moves : {moves.join(",")}</Text>
                {/* Affiche les mouvements du Pokémon sous forme de liste, séparés par des virgules. */}


            </View> 
            <View>
                <Text> Weaknesses : {weaknesses.join(",")}</Text>
            </View>
        </View>
    )
  

}

const styles = StyleSheet.create({

   card :{

    backgroundColor:"white",
    borderRadius:16,
    borderWidth:2,
    padding : 16,
    margin :16,
    ...Platform.select({
        ios:{
            shadowOffset:{width : 2, height :2},
            shadowColor: "#333",
            shadowOpacity: 0.25,
            shadowRadius: 4,
        },
        android : {
            elevation : 5,
        }
    })
   },

    namecontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:32,
    },
    name:{
        fontSize:30,
        fontWeight:"bold",
    },
    hp:{
        fontSize:22,
    },
    image: {
        width:"100%",
        height:200,

    }
});