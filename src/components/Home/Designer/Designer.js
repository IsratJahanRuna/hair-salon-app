import React from 'react';
import './Designer.css';
import photo from '../../../images/artist1.jpg';
import photoTWo from '../../../images/artist2.jpg';
import photoThree from '../../../images/artist3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Designer = () => {
    return (
        <div className="row d-flex justify-content-around mb-5" style={{color:"#721946"}}>
            {/* <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
</div> */}
                <div className="col-md-3 text-center mt-3 card card-design">
                    <img className="img-fluid my-4 justify-content-center " style={{height:"250px"}} src={photo} alt="" />
                    <h4>Sumaiya Akter</h4>
                    <p>HAIR ARTIST</p>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
                </div>

                <div className="col-md-3 text-center mt-4 card card-design">
                    <img className="img-fluid my-3" style={{height:"250px"}} src={photoTWo} alt="" />
                    <h4>Nishat Raihana</h4>
                    <p>SKIN ARTIST</p>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
                </div>

                <div className="col-md-3 text-center mt-4 card card-design">
                    <img className="img-fluid my-3" style={{height:"250px"}} src={photoThree} alt="" />
                    <h4>Shamsath Maleha</h4>
                    <p>HAIR ARTIST</p>
                    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
                </div>
            </div>
    );
};

export default Designer;