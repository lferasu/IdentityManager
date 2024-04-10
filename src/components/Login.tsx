import React from 'react';
import { Button, Flex, Input, Modal } from 'antd';
import Link from 'antd/es/typography/Link';
const Login = () => {
    return (
        <>

            <Modal
                open={true}
                closable={false}
                footer={null}
                width={'23%'}
                className='rounded-full'

            >
                <div className='text-center'>
                    <div className='text-3xl mb-4 mt-6 thin'>
                        Welcome to Identity Manager.
                    </div>
                    <div className='text-l mb-4 lato-thin w-4/5 inline-block'>
                        Not your device? Use a private or incognito window to sign in.
                    </div>
                </div>

                <div className='mt-3 content-center'>
                    <Input placeholder="Your Email Address"
                        className="text-center rounded-3xl h-9" />
                        <Input type='password' placeholder="Password"
                        className="text-center rounded-3xl h-9" />
                    <Button block className='bg-[#4682B4] mt-3 rounded-3xl h-9 text-white'>
                        Continue
                    </Button>
                </div>

                <div className="text-center mt-3">
                    Don't have an account ? &nbsp;
                    <Link className="underline inline"
                        style={{ textDecoration: 'underline' }} >
                        Sign up</Link>
                    <span>→</span>
                </div>

                <div className='mt-8 mb-8 text-center'>
                    <div className="text-center">
                        Forgot your login details?
                    </div >
                    <Link className="text-center inline" style={{ textDecoration: 'underline' }}>Reset your password </Link>
                    <span>→</span>
                </div>

            </Modal>
        </>
    )

}

export default Login