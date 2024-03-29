"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Sparkles } from "lucide-react";
import { useToast } from "./use-toast";
import axios from "axios";

interface SubscriptionButtonProps{
    isPro: boolean
}

function SubscriptionButton({isPro = false}: SubscriptionButtonProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const { toast } = useToast()

    const onClick = async() => {
        try {
            setLoading(true)
            const response = await axios.get("/api/stripe")
            window.location.href = response.data.url
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Something went wrong."
            })
        }finally {
        setLoading(false)
    }
    } 

  return (
    <Button onClick={onClick} disabled={loading} size="sm" variant={isPro ? "default" : "premium"}>
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Sparkles className="h-4 w-4 ml-2 fill-white"/> }
    </Button>
  )
}

export default SubscriptionButton;
