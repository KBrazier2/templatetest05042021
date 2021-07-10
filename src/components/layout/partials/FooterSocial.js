import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:mobriensconstruction@gmail.com?&subject=Project%20Inquiry%20&body=Hi%20there!%20We%20would%20like%20to%20inquire%20about%20a%20future%20project!" target="blank">
          <svg
          enable-background="new 0 0 32 32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32">
            <path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/>
            <polygon fill="#FFFFFF" points="6.518,21.815 11.707,15.291 6.518,12.119   "/>
            <polygon fill="#FFFFFF" points="19.5,15.746 15.989,17.908 12.472,15.758 7.11,22.5 24.867,22.5   "/>
            <polygon fill="#FFFFFF" points="15.988,16.864 25.482,11.017 25.482,9.5 6.518,9.5 6.518,11.076   "/>
            <polygon fill="#FFFFFF" points="20.263,15.276 25.482,21.843 25.482,12.062   "/>
          </svg>
          </a>
        </li>
        <li>
          <a href="https://www.google.com/search?_ga=2.169796964.452806684.1625923278-1497693009.1625923278&q=O%27Brien%27s+Construction+LLC&ludocid=12685467263311495001&lsig=AB86z5VachZ15Wg_j97n9AUdNZI4" target="blank">
          <svg 
            enable-background="new 0 0 32 32" 
            viewBox="0 0 32 32" 
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32">
              <title>Google</title>
              <path d="M16-0.01c-8.837,0-16,7.163-16,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.153,24.837-0.01,16-0.01z" fill="#333333"/>
              <path d="M24.477,14.334c0.111,0.59,0.171,1.209,0.171,1.854c0,5.044-3.377,8.631-8.476,8.631   c-4.878,0-8.83-3.952-8.83-8.83s3.952-8.83,8.83-8.83c2.384,0,4.376,0.877,5.905,2.301l-2.489,2.489v-0.006   c-0.927-0.883-2.102-1.336-3.416-1.336c-2.914,0-5.281,2.461-5.281,5.375c0,2.913,2.368,5.381,5.281,5.381   c2.644,0,4.442-1.512,4.813-3.587h-4.813v-3.444L24.477,14.334L24.477,14.334z" fill="#FFFFFF"/>
          </svg>
          </a>
        </li>
        <li>
          <a href="https://www.yelp.com/biz/o-briens-construction-asbury-park-5" target="_blank">
          <svg 
            enable-background="new 0 0 64 64" 
            viewBox="0 0 64 64" 
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32">
            <title>Yelp</title>
            <path d="M32,0C14.327,0,0,14.327,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32C64,14.327,49.673,0,32,0z" fill="#333333"/>
            <g id="g3781" transform="translate(297.22034,0)">
              <path d="M-275.388,13.311c2.075-1.631,6.062-2.098,7.703-1.779c1.643,0.316,2.501,1.235,2.511,2.353    l0.095,14.261c0.007,1.121-0.574,2.15-1.294,2.288c-0.723,0.136-1.787-0.53-2.372-1.483l-7.483-12.227    C-276.807,15.768-277.978,15.348-275.388,13.311L-275.388,13.311z M-277.872,40.429l7.534-2.666    c1.049-0.373,1.99-1.409,2.095-2.308c0.101-0.9-0.661-1.968-1.696-2.377l-7.958-3.156c-1.036-0.41-2.231,0.561-2.546,2.15    c0,0-0.19,5.533,0,6.679C-280.252,39.896-278.922,40.802-277.872,40.429L-277.872,40.429z M-264.732,41.761    c0.021-1.123-0.578-2.092-1.332-2.162c-0.756-0.07-1.955,0.574-2.67,1.43l-5.255,6.301c-0.715,0.856-0.36,2.867,0.683,3.248    l5.495,1.908c1.046,0.381,2.888-0.745,2.909-1.865L-264.732,41.761L-264.732,41.761z M-251.67,40.294l-6.589-1.894    c-1.068-0.307-2.281-0.278-2.692,0.07c-0.412,0.343-0.308,1.43,0.229,2.41l4.159,7.611c0.537,0.98,2.688,0.812,3.28-0.139    c0,0,2.507-3.697,2.967-5.084C-249.854,41.878-250.602,40.601-251.67,40.294L-251.67,40.294z M-250.065,29.593    c-0.297-0.963-2.357-3.801-3.473-4.768c-1.114-0.97-2.39-0.849-3.108,0.003l-4.246,5.059c-0.72,0.851-0.912,2.202-0.433,2.995    c0.479,0.794,1.759,1.243,2.844,1l7.345-1.362C-249.811,32.201-249.763,30.555-250.065,29.593L-250.065,29.593z" fill="#FFFFFF" id="Yelp_3_"/>
            </g>
          </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/obriens_construction_llc/" target="_blank">
            <svg 
              enable-background="new 0 0 32 32" 
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32">
              <title>Instagram</title>
              <path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/>
              <path d="M22.057,7.93H9.943c-1.14,0-2.019,0.879-2.019,2.019v12.113c0,1.14,0.879,2.019,2.019,2.019h12.113   c1.14,0,2.019-0.879,2.019-2.019V9.949C24.076,8.808,23.196,7.93,22.057,7.93z M16.012,12.833c1.791,0,3.243,1.407,3.243,3.142   c0,1.735-1.452,3.142-3.243,3.142c-1.79,0-3.242-1.408-3.242-3.142C12.77,14.239,14.222,12.833,16.012,12.833z M22.057,21.557   c0,0.354-0.151,0.505-0.505,0.505H10.448c-0.353,0-0.505-0.151-0.505-0.505v-7.066l1.258,0.274   c-0.135,0.439-0.208,0.903-0.208,1.385c0,2.684,2.248,4.863,5.018,4.863c2.772,0,5.019-2.178,5.019-4.863   c0-0.482-0.073-0.946-0.208-1.385l1.234-0.274V21.557z M22.057,12.472c0,0.279-0.226,0.505-0.505,0.505h-2.019   c-0.279,0-0.505-0.226-0.505-0.505v-2.019c0-0.279,0.226-0.505,0.505-0.505h2.019c0.279,0,0.505,0.226,0.505,0.505V12.472z" fill="#FFFFFF"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;