import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../lib/cn'

const Pic = ({className,href,src,alt}) => {
  return (
    <div className={cn(className)}>
        <Link to={href}>
            <picture>
                <img src={src} alt={alt} />
            </picture>
        </Link>
    </div>
  )
}

export default Pic
