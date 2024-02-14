import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsGithub, BsInstagram, BsTwitterX} from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1 ml-5">
                <div className="mt-5">
                    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>

                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Surya's</span>
                    Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div className="">
                        <Footer.Title title='About'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >Github
                                </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div className="">
                        <Footer.Title title='Follow us'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >Discord
                                </Footer.Link>
                                    <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >Instagram
                                </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div className="">
                        <Footer.Title title='Legal'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >privacy Policy
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >Terms & Conditions
                                </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            
                
                <div className="w-full sm:flex sm:items-center sm:justify-between ">
                    <Footer.Copyright
                      href='#'
                      by="Surya's Blog"
                      year={new Date().getFullYear()}
                    />
                    
                    <div className="flex gap-6 sm:mt-0 mt-4 mb-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsGithub}/>
                        <Footer.Icon href='#' icon={BsTwitterX}/>
                    </div>
                </div>
            
        </div>

    </Footer>
    
  )
}
