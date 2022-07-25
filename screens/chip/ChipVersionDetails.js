import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Loading from '../../components/Loading'
import Api from '../../Api'
import DetailsList from '../../components/DetailsList';
import RatingInfo from '../../components/RatingInfo';
import ReviewCard from '../../components/ReviewCard';
import AddReviewModal from '../../components/AddReviewModal';
import { Button } from '@ui-kitten/components';

const phoneWidth = Dimensions.get('window').width / 100;
const phoneHeight = Dimensions.get('window').height / 100;

function ChipDetails({ route, navigation }) {
  const [data, setData] = React.useState({})
  const [reviews, setReviews] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(async () => {
    setLoading(true)
    const response = await Api.getChipVersionDetails(route.params.id)
    const reviewResponse = await Api.getChipVersionReviews(route.params.id)
    setLoading(false)
    if (response.ok && reviewResponse.ok) {
      setData(await response.json())
      const reviewResponseData = await reviewResponse.json()
      setReviews(reviewResponseData.content)
    }
    else alert("Something Wrong Went :(")
  }, [])

  return (
    <ScrollView style={style.container}>
      <Loading visible={loading} />
      <AddReviewModal chipID={route.params.id} visible={modalVisible} setVisible={setModalVisible} />
      <View style={style.topSection}>
        <Text style={style.topSectionText}>{data.name}</Text>
        <MaterialIcons name="question-answer" size={24} color="black" onPress={() => navigation.navigate("ChipVersionQuestions", { chipID: route.params.id })} />
      </View>
      <ScrollView style={{ marginVertical: 30 }} horizontal={true}>
        <Image style={style.galleryImage} source={{ uri: "https://live-guard-app.herokuapp.com/img/chip.9a0dd998.png" }} />
        <Image style={style.galleryImage} source={{ uri: "https://ae01.alicdn.com/kf/H1ea5714cd91a49958a63b57c7c35e78dC/ZX310-Super-Mini-GPS-Tracker-PCBA-Extreme-Small-Board-GSM-GPRS-Wifi-Tracking-Chip-for-TV.jpg_Q90.jpg_.webp" }} />
      </ScrollView>
      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "right" }}>300$</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Description</Text>
      <Text>{data.full_description}</Text>
      <DetailsList list={data.details || []} weight={data.weight} />
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Reviews  <RatingInfo users={data.review_count} rate={data.average_rating} /> </Text>
        <Button title='Add' onPress={() => setModalVisible(!modalVisible)} />
      </View>
      {reviews.map(e => <ReviewCard key={e.id} review_time={e.review_time} comment={e.comment} rating={e.rating} headline={e.headline} user={e.user} />)}
      <Button onPress={() => {
        setTimeout(() => {
          alert("Added To Cart!")
          navigation.goBack()
        }, 1000)
      }} disabled={!data.in_stock} >Add To Cart</Button>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    marginVertical: 10
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topSectionText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  galleryImage: {
    width: phoneWidth * 85,
    height: phoneHeight * 30,
    borderRadius: 25,
    marginHorizontal: 10
  }
})

export default ChipDetails