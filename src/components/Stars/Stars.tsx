import 'bootstrap-icons/font/bootstrap-icons.css'

interface props {
  stars: number | undefined
}

const Stars = ({stars}: props)=> {

  return (
    <div>
      {
        [... new Array(5)].map((star, index) => {
          return (index+1) <= (stars-5)
              ?<i className="bi bi-star-fill" key={index}></i> 
              :<i className="bi bi-star"key={index}></i> 
        })
      }
    </div>
  )
}

export default Stars