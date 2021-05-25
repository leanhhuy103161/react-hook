import { connect } from 'react-redux'
import { addNewImage, changeImage } from '../actions/image'
import ImageContent from '../pages/ImageContent'

const mapStateToProps = (state) => {
  return {
    imageList: state.image.list,
  }
}

const mapDispatchToProps = {
  addNewImage,
  changeImage,
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageContent)