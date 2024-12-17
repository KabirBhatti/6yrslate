import './App.css';
import SiteLogo from './images/Logo.png'
import browseImg from './images/browse.png'
import btnImg from './images/btn-arrow.svg'
import searchIcon from './images/search-icon.svg'
import heartBtn from './images/heart.svg'
import downloadBtn from './images/download-arrow.svg'
import footerDownload from './images/download-small-arrow.svg'
import backSong from './images/back-song.svg'
import pauseSong from './images/pause-icon.svg'
import soundIcon from './images/sound-icon.svg'
import crossIcon from './images/close-icon.svg'
import emailIcon from './images/email.svg'
import passwordIcon from './images/password.svg'



function App() {
  return (
    <div className="App text-white protoMono">
      {/* SONG SECTION */}
      <section className="song-section bg-[#100F0F] lg:px-12 sm:px-10 px-4">
        <section>
          <div>
            <div className="song-nav lg:pt-10 lg:pb-8 sm:pt-8 sm:pb-6 pb-4 pt-6 ">
              <div className="flex">
                <div className="flex lg:gap-10 sm:gap-8 gap-4 w-1/2 items-center">
                  <div>
                    <img src={SiteLogo} />
                  </div>

                  <div className='hidden lg:block sm:block'>
                    <img src={browseImg} />
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <button className="border-[1px] rounded-xl py-[11px] px-[18px]">Login</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="ps-3 border-[1px] rounded-[10px]">
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="flex gap-3">
                  <div>
                    <button className="py-[10px] px-4 uppercase text-black flex items-center gap-3 rounded-lg bg-white">tempo
                      <div><img src={btnImg} alt='' /></div>
                    </button>
                  </div>
                  <div>
                    <button className="py-[10px] px-4 uppercase text-black flex items-center gap-3 rounded-lg bg-white">instruments
                      <div><img src={btnImg} alt='' /></div>
                    </button>
                  </div>
                  <div>
                    <button className="py-[10px] px-4 uppercase text-black flex items-center gap-3 rounded-lg bg-white">date
                      <div><img src={btnImg} alt='' /></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <div className="flex items-center rounded-[9px] bg-[#2B2A2A] w-1/2 px-3 ">
                  <img className="" src={searchIcon} alt='' />
                  <input className="w-full py-5 px-2 bg-[#2B2A2A] rounded-[9px] outline-none" type='text' placeholder='Search'></input>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='songs pt-10 pb-12 flex flex-col gap-11'>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='song'>
            <div className='flex gap-5 items-center'>
              <div className='w-[30%]'></div>
              <div className='w-[40%]'>
                <div className='song-title'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                </div>
                <div className='song-description'>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
              </div>
              <div className='w-[30%]'>
                <div className='flex justify-between'>
                  <div className='download-speed'>
                    <button className='py-[6] px-2 border rounded-[4px] text-base '>130 BPM</button>
                  </div>
                  <div className='flex gap-12'>
                    <button className='like-btn'>
                      <img src={heartBtn} alt='' />
                    </button>
                    <button className='download-btn'>
                      <img src={downloadBtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='control-section bg-[#1A1717]'>
        <div className='py-9 px-[30px]'>
          <div className='flex gap-5'>
            <div className='w-2/5'>
              <div className='flex items-center gap-7'>
                <div className='w-2/4'>
                  <h3 className='text-lg'>fuck the world (DM - 70bpm) - the blindside.wav</h3>
                  <p className='text-base text-[#FFFFFF99]'>house of waves music library</p>
                </div>
                <div className='flex items-center gap-3 w-2/4'>
                  <div>
                    <button className='like-btn'>
                      <img className='w-6 h-6' src={heartBtn} alt='' />
                    </button>
                  </div>
                  <div>
                    <button className='footer-download-btn flex items-center gap-2 px-3 py-[10px] border-[0.839px] rounded-lg text-sm'>
                      <img className='' src={footerDownload} alt='' />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/5 flex items-center justify-center'>
              <div className='song-controller flex items-center gap-7 justify-center'>
                <div>
                  <img src={backSong} alt='' />
                </div>
                <div className=' py-3 px-3 border rounded-full'>
                  <img src={pauseSong} alt='' />
                </div>
                <div>
                  <img className='rotate-180' src={backSong} alt='' />
                </div>
              </div>
            </div>
            <div className='w-2/5 flex justify-end items-center'>
              <div className='flex gap-7 items-center justify-end'>
                <img src={soundIcon} alt='' />
                <p>1:08</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='login-form h-screen flex justify-center items-center bg-black'>
          <form className='pt-6 pb-7 bg-[#191717] rounded-[14.248px] border-[1.069px]'>

            <div className='flex flex-col gap-[10px]'>
              <div className='flex justify-end px-5'>
                <img src={crossIcon} alt='' />
              </div>
              <div className='flex flex-col gap-8 px-9'>
                <div>
                  <h2 className='text-[32px]'>Login to your account</h2>
                </div>
                <div>
                  <div className='flex flex-col gap-5'>
                    <div className='flex items-center bg-[#2B2A2A] ps-[14px] border-[0.712px] rounded-lg'>
                      <img src={emailIcon} alt='' />
                      <input className='py-3 pr-[14px] rounded-lg border-[ 0.712px]  w-11/12 outline-none bg-transparent' type='email' placeholder='Email'></input>
                    </div>
                    <div className='flex items-center bg-[#2B2A2A] ps-[14px] border-[0.712px] rounded-lg'>
                      <img src={passwordIcon} alt='' />
                      <input className='py-3 pr-[14px] rounded-lg border-[ 0.712px]  w-11/12 outline-none bg-transparent' type='password' placeholder='password'></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
