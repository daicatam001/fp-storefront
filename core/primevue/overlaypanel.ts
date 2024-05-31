export default {
    root: {
        class: ['rounded-md shadow-lg', 'border-0 dark:border', 'absolute left-0 top-0 mt-2', 'z-40 transform origin-center', 'bg-white dark:bg-slate-800', 'text-slate-700 dark:text-slate-0/80', 'dark:border-slate-700', 'before:absolute before:-top-[9px] before:-ml-[9px] before:left-[calc(var(--overlayArrowLeft,0)+1.25rem)] z-0', 'before:w-0 before:h-0', 'before:border-transparent before:border-solid', 'before:border-x-[8px] before:border-[8px]', 'before:border-t-0 before:border-b-slate-300/10 dark:before:border-b-slate-700', 'after:absolute after:-top-2 after:-ml-[8px] after:left-[calc(var(--overlayArrowLeft,0)+1.25rem)]', 'after:w-0 after:h-0', 'after:border-transparent after:border-solid', 'after:border-x-[0.5rem] after:border-[0.5rem]', 'after:border-t-0 after:border-b-slate-0 dark:after:border-b-slate-800']
    },
    content: {
        class: 'p-5'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
}