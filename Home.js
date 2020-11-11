return (
      
  <View style={styles.container} >
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Vælg Film</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('movies')} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Vælg Film</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('cinemas')} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Vælg Biograf</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('movies')} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Vælg Dag</Text>
      </View>
    </TouchableOpacity>
  </View>

);