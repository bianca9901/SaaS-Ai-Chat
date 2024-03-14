"use client"
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from './dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Separator } from './separator'
import { Button } from './button'
import { useToast } from './use-toast'
import axios from 'axios'

function ProModal() {
    const ProModal = useProModal()
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    const onSubscribe = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/stripe")
            window.location.href = response.data.url
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Something went wrong."
            })
        } finally {
            setLoading(false)
        }
    }

    if(!isMounted) {
        return null;
    }
  return (
    <Dialog open={ProModal.isOpen} onOpenChange={ProModal.onClose}>
        <DialogContent>
            <DialogHeader className='space-y-4'>
                <DialogTitle className="text-center">
                    Upgrade to pro
                </DialogTitle>
                <DialogDescription className='text-center spacy-y-2'>
                    Create <span className='text-sky-500 mx-1 font-medium'>Custom AI</span> Companions!
                </DialogDescription>
            </DialogHeader>
            <Separator />
            <div className='flex justify-between'>
                <p className='text-2xl font-medium'>
                    99SEK / månad
                </p>
                <Button variant="premium" onClick={onSubscribe} disabled={loading}>
                    Subscribe
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProModal