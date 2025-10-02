"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b-2 border-primary/20", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring px-5 focus-visible:ring-ring/50 flex flex-1 text-[24px] font-semibold gap-4 rounded-t-md py-4 text-left text-sm transition-all outline-none justify-between items-center focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:bg-primary/10 group",
          className
        )}
        {...props}
      >
        {children}
        <div className={cn("border relative border-primary rounded-full h-6 w-6 group-data-[state=open]:bg-primary")}>
          <div className="absolute top-1/2 left-1/2 -translate-1/2 border border-primary h-3 group-data-[state=open]:border-white group-data-[state=open]:rotate-45 transition-all"/>
          <div className="absolute top-1/2 left-1/2 -translate-1/2 border border-primary w-3 group-data-[state=open]:border-white group-data-[state=open]:rotate-45 transition-all"/>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("group-data-[state=open]:bg-primary/10 px-5 rounded-b-md pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
