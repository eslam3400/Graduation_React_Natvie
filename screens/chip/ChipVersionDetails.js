import React from 'react'
import { View, Text, Image, ScrollView, Button, StyleSheet, Dimensions } from 'react-native'
import Loading from '../../components/Loading'
import Api from '../../Api'
import DetailsList from '../../components/DetailsList';
import RatingInfo from '../../components/RatingInfo';
import ReviewCard from '../../components/ReviewCard';
import AddReviewModal from '../../components/AddReviewModal';

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
      </View>
      <ScrollView style={{ marginVertical: 30 }} horizontal={true}>
        <Image style={style.galleryImage} source={{ uri: "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />
        <Image style={style.galleryImage} source={{ uri: "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png" }} />
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
      <Button title='Add To Card' onPress={() => { }} disabled={!data.in_stock} />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  topSectionText: {
    paddingLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10
  },
  galleryImage: {
    width: phoneWidth * 85,
    height: phoneHeight * 30,
    borderRadius: 25,
    marginHorizontal: 10
  }
})

export default ChipDetails