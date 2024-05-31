<template>
    <ProgressSpinner class="pw-progress-spinner"
      :pt="progressspinner"
      :unstyled="true"
      :strokeWidth="strokeWidth"
      :animationDuration="animationDuration"
      :style="{
        width: size,
        height: size
      }" />
  </template>
  <style></style>
  <script lang="ts" setup>
  import ProgressSpinner from 'primevue/progressspinner';
  
  const props = defineProps({
    strokeWidth: {
      type: String,
      default: '2',
    },
    animationDuration: {
      type: String,
      default: '2s',
    },
    size: {
      type: String,
      default: '5rem'
    },
    color: {
      type: String,
      default: '#475569'
    }
  });
  
  const progressspinner = {
    root: {
      class: [
        'relative',
        'mx-auto',
        'w-20', 'h-20',
        'inline-block',
        'before:block',
        'before:pt-full',
      ],
    },
    spinner: {
      class: [
        'absolute',
        'top-0',
        'bottom-0',
        'left-0',
        'right-0',
        'm-auto',
        'w-full',
        'h-full',
        'transform',
        'origin-center',
        'animate-spin',
      ],
    },
    circle: {
      class: ['text-primary stroke-primary', 'pw-progress-spinner-circle',],
      style: { stroke: props.color }
    },
  };
  </script>
  <style>
  .pw-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }
  
  @keyframes p-progress-spinner-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
  
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
  
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
  
  @keyframes p-progress-spinner-color {
  
    100%,
    0% {
      stroke: #ff5757;
    }
  
    40% {
      stroke: #696cff;
    }
  
    66% {
      stroke: #1ea97c;
    }
  
    80%,
    90% {
      stroke: #cc8925;
    }
  }
  </style>
  