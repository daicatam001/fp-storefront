<template>
    <Accordion :activeIndex="0" :pt="accordion">
        <AccordionTab header="Product Information" >
            <p class="m-0"> {{ product.description }} </p>
        </AccordionTab>
        <!-- <AccordionTab header="Shipping and Returns">
            <p class="m-0"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                velit, sed quia non numquam eius modi. </p>
        </AccordionTab> -->
    </Accordion>
</template>
<script setup>
defineProps({
    product: Object
})

const accordion = {
    accordiontab: {
        root: {
            class: 'mb-1',
        },
        header: ({ props }) => ({
            class: [
                // State
                { 'border-t select-none pointer-events-none cursor-default opacity-60': props == null ? void 0 : props.disabled }
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                //Font
                'font-bold',
                'leading-none',
                // Alignments
                'flex items-center flex-row-reverse justify-between border-b',
                'relative',
                // Sizing
                'py-5',
                // Shape
                'rounded-t-md',
                { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0': context.active },
                // Color
                'text-slate-600 dark:text-slate-0/80',
                { 'text-slate-900': context.active },
                // Transition
                'transition duration-200 ease-in-out',
                'transition-shadow duration-200',
                // States
                'hover:text-slate-900',
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50',
                // Focus
                // Misc
                'cursor-pointer no-underline select-none'
            ]
        }),
        headerIcon: {
            class: 'inline-block mr-2'
        },
        headerTitle: {
            class: 'leading-none'
        },
        content: {
            class: ['py-5', 'rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg', 'bg-slate-0 dark:bg-slate-800', 'text-slate-700 dark:text-slate-0/80']
        },
        transition: {
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
            enterToClass: 'max-h-[1000px]',
            leaveFromClass: 'max-h-[1000px]',
            leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
            leaveToClass: 'max-h-0'
        }
    }
}
</script>