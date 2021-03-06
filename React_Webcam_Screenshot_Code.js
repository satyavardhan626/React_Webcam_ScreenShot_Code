import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pic:"",
    }
    this.clear=this.clear.bind(this)
  }
  setRef = webcam => {
    this.webcam = webcam;
  };
 componentDidMount() {
 
  this.interval = setInterval(() => this.setState({ time:  this.capture() }), 10000);
}
componentWillUnmount() {
  this.clear();
  
  // clearInterval(this.interval);
}
  capture = () => {
    console.log("clicked")
    var imageSrc="";
     imageSrc = this.webcam.getScreenshot();
        console.log("clickedafter",imageSrc)
    this.setState({
      pic:imageSrc
    })

  };
 clear(){
       console.log("cleared")

   this.setState({
     pic:""
   })
 }
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
      <div>
        <Webcam
          audio={false}
          height={550}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={600}
          videoConstraints={videoConstraints}
        />
       

        <img src={this.state.pic} alt="screenshot" />
      </div>
    );
  }
}


ReactDOM.render(
    <WebcamCapture />
      
  
  
  ,
  
  
  
  document.getElementById('root')
);

https://www.npmjs.com/package/react-webcam
