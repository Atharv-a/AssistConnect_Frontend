export default function Details({formData}){
    return <div id="details">
        <h1>Details</h1>
        <div id='detail'>
           {
            (formData.location)?<p>
                <span className='detailh'>Describe</span>: {' '+formData.description} <br/> 
                <span className='detailh'>Type of Service</span>:{' '+formData.servicetype}<br/> 
                <span className='detailh'>Location</span>:<br/>
                {'latitute: '+formData.location.latitude}<br/>
                {'longitude: '+formData.location.longitude}<br/> 
            </p> 
            :
            <p>Your Details Will be visible here after submission of the form.</p>
            }
        </div>
    </div>
}