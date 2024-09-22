import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
            &copy; 2024 Irtesaam Atfi. All rights reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website : </span> built with Next.js (App router & Server Actions), Tailwind CSS, TypeScript, Framer Motion, React Email, Resend and Vercel hosting.
        </p>
    </footer>
  )
}
