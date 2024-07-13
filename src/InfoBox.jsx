import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function Infobox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1657829951302-d793848f4121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1490909076160-9a3687c8e965?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1520586857-bc526a440fa1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1661759079409-40e655554c35?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="Infobox">
      <br />
      <br />

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={
            info.humidity > 86 ? RAIN_URL : info.temp > 19 ? HOT_URL : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} 
            <br/>
            <span>  {info.humidity > 86 ? (
              <ThunderstormIcon />
            ) : info.temp > 19 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}</span>
          
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C </p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp ={info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i> {info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
