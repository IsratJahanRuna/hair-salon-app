import React from 'react';
import Designer from '../Designer/Designer';

const Designers = () => {
    return (
        
            <section>
            <div className="container">
                <h2 className="text-center mt-5" style={{color:"#721946"}}>Our Artists</h2>
                <div className="row">
                   <Designer></Designer>
                
                </div>
            </div>
        </section>
        
    );
};

export default Designers;