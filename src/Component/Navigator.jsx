import { Link } from 'react-router-dom';
import { LugarMaravilloso1 } from './LugarMaravilloso1';
import { LugarMaravilloso2 } from './LugarMaravilloso2';
import { LugarMaravilloso3 } from './LugarMaravilloso3';
import { LugarMaravilloso4 } from './LugarMaravilloso4';
import { LugarMaravilloso5 } from '.LugarMaravilloso5';
import { LugarMaravilloso6 } from './LugarMaravilloso6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/LugarMaravilloso1' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso1 />
          <figcaption>LugarMaravilloso 1</figcaption>
        </figure>
      </Link>
      <Link to='/LugarMaravilloso2' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso2 />
          <figcaption>LugarMaravilloso 2</figcaption>
        </figure>
      </Link>
      <Link to='/LugarMaravilloso3' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso3 />
          <figcaption>LugarMaravilloso 3</figcaption>
        </figure>
      </Link>
      <Link to='/LugarMaravilloso4' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso4 />
          <figcaption>LugarMaravilloso 4</figcaption>
        </figure>
      </Link>
      <Link to='/LugarMaravilloso5' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso5 />
          <figcaption>LugarMaravilloso 5</figcaption>
        </figure>
      </Link>
      <Link to='/LugarMaravilloso6' className='links'>
        <figure className='thumbnail-image-size'>
          <LugarMaravilloso6 />
          <figcaption>LugarMaravilloso 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}