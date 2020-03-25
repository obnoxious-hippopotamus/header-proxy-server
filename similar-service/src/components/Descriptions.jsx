import React from 'react';


const Descriptions = (props) => {
     console.log(props.info)
        if (props.info.length < 1) {
          return null;
        }
        return (
            <ul className="detailsValues">
                <li>{props.info[0].studio}</li>
                <li>PG-13 (Parents Strongly Cautioned)</li>
                <li>{props.info[0].producers}</li>
                <li>{props.info[0].supportingActors1}, {props.info[0].supportingActors2}, {props.info[0].supportingActors3}</li>
                <li>Stream instantly <a href="https://www.amazon.com/dp/B07WMM8J8K/ref=atv_dp_oth_format_bluray_1">Details</a></li>
                <li>Prime Video (streaming online video)</li>
                <li>Available to watch on <a href="https://www.amazon.com/movies-tv-dvd-bluray/b/?ie=UTF8&node=2625373011&ref_=topnav_storetab_mov">supported devices</a></li>
            </ul>
        )
}





export default Descriptions;