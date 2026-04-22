import React from 'react';

const hospStyles = `
  @keyframes hosp-float {
    0%, 100% { transform: translateY(0px) rotate(0.5deg); }
    50% { transform: translateY(-9px) rotate(-0.5deg); }
  }
  @keyframes hosp-win-in {
    from { opacity: 0; transform: scaleY(0.6); }
    to   { opacity: 1; transform: scaleY(1); }
  }
  @keyframes hosp-circle-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  @keyframes hosp-line-flow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -20; }
  }
  .hosp-svg-wrap {
    animation: hosp-float 7s ease-in-out infinite;
  }
  .hosp-win-1 { animation: hosp-win-in 0.6s ease-out both 0.1s; }
  .hosp-win-2 { animation: hosp-win-in 0.6s ease-out both 0.25s; }
  .hosp-win-3 { animation: hosp-win-in 0.6s ease-out both 0.4s; }
  .hosp-win-4 { animation: hosp-win-in 0.6s ease-out both 0.55s; }
  .hosp-win-5 { animation: hosp-win-in 0.6s ease-out both 0.7s; }
  .hosp-win-6 { animation: hosp-win-in 0.6s ease-out both 0.85s; }
  .hosp-win-7 { animation: hosp-win-in 0.6s ease-out both 1.0s; }
  .hosp-win-8 { animation: hosp-win-in 0.6s ease-out both 1.15s; }
  .hosp-circle-a { animation: hosp-circle-pulse 3s ease-in-out infinite; }
  .hosp-circle-b { animation: hosp-circle-pulse 3s ease-in-out infinite 1.5s; }
  .hosp-flow {
    stroke-dasharray: 5 3;
    animation: hosp-line-flow 2s linear infinite;
  }
`;

export default function HospitalityCard() {
    return (
        <div className="w-full max-w-[1140px] h-[360px] bg-[#003A5C] rounded-3xl p-10 shadow-lg border border-neutral-900 flex flex-col relative overflow-hidden mx-auto">
            <style>{hospStyles}</style>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[65%]">
                <div className="flex flex-col gap-3">
                    <div className="w-fit px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <p className="text-xs font-semibold tracking-[0.15em] text-sky-100 uppercase">
                            Hospitality
                        </p>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                        Hospitality-First Design
                    </h2>
                    
                    <div className="text-base md:text-lg text-sky-100/90 leading-snug space-y-2 mt-1">
                        <p className="mb-2">
                            Built specifically for hotel workflows from the ground up, understanding the nuances of guest experience and staff operations.
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-sky-400/60 shrink-0" />
                            Seamless integration with your existing PMS
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-sky-400/60 shrink-0" />
                            Designed to empower your staff, not replace them
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom Isometric SVG Illustration */}
            <div className="absolute -bottom-2 -right-4 w-[280px] h-[220px] hosp-svg-wrap">
                <svg width="302" height="276" viewBox="0 0 302 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M210.745 161.077L220.802 155.393C221.458 155.022 222.272 155.481 222.294 156.234L222.726 170.939C222.738 171.328 222.522 171.689 222.174 171.863L220.745 172.577M210.745 161.077V177.077M210.745 161.077L207.378 158.973M210.745 177.077L214.745 175.077M210.745 177.077L207.298 175.354C206.959 175.184 206.745 174.838 206.745 174.459V159.323C206.745 158.999 207.102 158.801 207.378 158.973M218.245 152.577L216.095 153.15C212.626 154.076 209.561 156.123 207.378 158.973" stroke="white" />
                    <path d="M1.24737 132.633L151.495 219.868" stroke="white" />
                    <path d="M0.253229 146.459L150.501 233.694" stroke="white" />
                    <path d="M300.749 132.746L150.501 219.981" stroke="white" />
                    <path d="M301.743 146.572L151.495 233.807" stroke="white" />
                    <path d="M150.998 219.755V233.957M1.24805 132.582V146.784M300.251 133.071L301.246 146.784" stroke="white" />
                    <path d="M1.74512 132.577L69.7451 92.5772M151.245 45.0772L72.7451 90.5772M47.2451 63.5772L84.7451 42.5772M47.2451 63.5772L43.9781 61.9436C43.2516 61.5804 43.2383 60.5483 43.9553 60.1665L80.2895 40.8197C80.5753 40.6676 80.9171 40.6632 81.2068 40.808L84.7451 42.5772M47.2451 63.5772V95.5772M84.7451 42.5772L85.7272 74.9874C85.7383 75.3513 85.5507 75.6924 85.2375 75.878L72.7801 83.2602C72.4525 83.4543 72.2636 83.8175 72.2928 84.1971L73.0105 93.5269C73.0846 94.491 71.8834 94.9885 71.2542 94.2544L64.7777 86.6986C64.4679 86.3371 63.9462 86.2442 63.5307 86.4764L47.2451 95.5772M47.2451 95.5772L43.7151 93.3709C43.4227 93.1882 43.2451 92.8677 43.2451 92.5229V61.0772" stroke="white" />
                    <path className="hosp-circle-a" d="M63.3295 61.4027C64.8295 59.6866 67.3931 59.4977 69.0538 60.9489C70.7145 62.4002 70.8707 64.966 69.3711 66.6824C67.8712 68.3987 65.307 68.5882 63.6462 67.1368C61.9854 65.6854 61.8296 63.119 63.3295 61.4027Z" stroke="white" />
                    <path className="hosp-circle-b" d="M116.368 85.7658C118.538 83.2821 122.253 83.0017 124.663 85.1073C127.072 87.2129 127.292 90.9317 125.121 93.4155C122.951 95.8989 119.237 96.1788 116.827 94.0733C114.418 91.9677 114.198 88.2495 116.368 85.7658Z" stroke="white" />
                    <path d="M75.245 76.0771C74.7451 71.0772 70.1329 68.0059 65.2451 70.5772C60.3574 73.1486 55.6882 81.6667 57.7452 85.5769" stroke="white" />
                    <path d="M130.746 121.577C130.746 117.185 131.92 110.089 129.745 104.577C127.955 100.041 122.613 97.5772 119.745 97.5772C117.253 97.5772 113.755 97.163 112.245 100.077C109.908 104.591 110.746 112.711 110.746 117.577" stroke="white" />
                    <path d="M201.513 131.766C203.684 129.282 207.399 129.002 209.808 131.107C212.218 133.213 212.437 136.932 210.267 139.415C208.096 141.899 204.382 142.179 201.973 140.073C199.564 137.968 199.343 134.249 201.513 131.766Z" stroke="white" />
                    <path d="M196.079 166.578C194.945 162.334 195.399 158.933 196.079 153.047C196.638 148.202 201.164 144.443 203.934 143.703C206.341 143.06 209.615 141.758 211.825 144.184C215.248 147.941 214.245 150.577 214.246 152.077" stroke="white" />
                    <path d="M124.245 146.866V171.7L70.2451 139.791V115.938L124.245 146.866Z" stroke="white" />
                    <path d="M146.245 159.29L124.245 172.203V146.863L146.245 133.95V159.29Z" stroke="white" />
                    <path d="M147.002 125.673C147.336 125.861 147.344 126.339 147.016 126.538L124.999 139.841C124.842 139.935 124.647 139.936 124.489 139.845L68.9434 107.484C68.617 107.294 68.6118 106.823 68.934 106.625L88.9453 94.3493C89.1148 94.2454 89.3303 94.2519 89.4933 94.3657L97.7058 100.111C98.0012 100.318 97.9876 100.759 97.68 100.947L91.4176 104.775C90.4477 105.367 90.4643 106.782 91.4478 107.352L123.985 126.212C124.46 126.488 125.048 126.481 125.517 126.195L136.006 119.808C136.16 119.714 136.353 119.71 136.51 119.798L147.002 125.673Z" stroke="white" />
                    <path d="M68.2451 107.077V111.827C68.2451 112.614 68.6156 113.355 69.2451 113.827C69.8746 114.299 70.2451 115.04 70.2451 115.827V116.077M124.745 140.077V146.577M147.745 126.077V131.774C147.745 132.901 147.182 133.952 146.245 134.577M98.7451 100.577V103.723C98.7451 105.779 97.5837 107.658 95.7451 108.577" stroke="white" />
                    <path d="M145.245 170.577L146.245 175.577" stroke="white" />
                    <path d="M144.745 170.577L152.745 171.577" stroke="white" />
                    <path d="M145.745 171.077L167.763 183.522C168.373 183.867 169.118 183.867 169.728 183.524L192.745 170.577" stroke="white" />
                    <path d="M190.766 149.561L182.745 149.561" stroke="white" />
                    <path d="M190.948 150.027L187.1 142.942" stroke="white" />
                    <path d="M190.745 149.577L154.745 128.577" stroke="white" />
                    <path d="M172.87 110.41L169.745 116.577" stroke="white" />
                    <path d="M173.175 110.457L164.7 109.788" stroke="white" />
                    <path d="M172.873 110.426L153.746 121.577" stroke="white" />
                    <path d="M217.745 152.577L221.745 154.577" stroke="white" />
                    <path d="M211.245 158.577L212.745 157.577M213.745 157.077L215.245 156.077M216.245 155.577L217.745 154.577" stroke="white" />
                    <path d="M213.245 44.8672V127.709L157.248 95.2901L158.234 13.4326L213.245 44.8672Z" stroke="white" />
                    <path d="M233.745 32.5772L178.745 0.57716L157.745 12.5772M233.745 32.5772V116.577L213.245 128.077M233.745 32.5772L213.245 45.0772M151.245 45.0772L156.745 48.5772" stroke="white" />
                    <path d="M233.745 32.5772L178.745 0.57716L157.745 12.5772M233.745 32.5772V116.577L213.245 128.077M233.745 32.5772L213.245 45.0772M151.245 45.0772L156.745 48.5772" stroke="white" />
                    <path d="M234.245 94.0772L300.245 133.577" stroke="white" />
                    <path className="hosp-win-1" d="M169.741 29.0473L169.741 38.1943L163.236 34.2938L163.243 25.8765L169.741 29.0473Z" stroke="white" />
                    <path className="hosp-win-2" d="M181.89 35.5473L181.889 44.6943L175.384 40.7938L175.392 32.3765L181.89 35.5473Z" stroke="white" />
                    <path className="hosp-win-3" d="M169.741 29.0473L169.741 38.1943L163.236 34.2938L163.243 25.8765L169.741 29.0473Z" stroke="white" />
                    <path className="hosp-win-4" d="M194.89 42.5473L194.889 51.6943L188.384 47.7938L188.392 39.3765L194.89 42.5473Z" stroke="white" />
                    <path className="hosp-win-5" d="M206.89 49.5473L206.889 58.6943L200.384 54.7938L200.392 46.3765L206.89 49.5473Z" stroke="white" />
                    <path className="hosp-win-6" d="M182.038 54.0473L182.038 63.1943L175.533 59.2938L175.54 50.8765L182.038 54.0473Z" stroke="white" />
                    <path className="hosp-win-7" d="M169.89 47.5473L169.889 56.6943L163.384 52.7938L163.392 44.3765L169.89 47.5473Z" stroke="white" />
                    <path className="hosp-win-8" d="M195.038 61.0473L195.038 70.1943L188.533 66.2938L188.54 57.8765L195.038 61.0473Z" stroke="white" />
                    <path d="M207.038 68.0473L207.038 77.1943L200.533 73.2938L200.54 64.8765L207.038 68.0473Z" stroke="white" />
                    <path d="M182.038 71.0473L182.038 80.1943L175.533 76.2938L175.54 67.8765L182.038 71.0473Z" stroke="white" />
                    <path d="M169.89 64.5473L169.889 73.6943L163.384 69.7938L163.392 61.3765L169.89 64.5473Z" stroke="white" />
                    <path d="M195.038 78.0473L195.038 87.1943L188.533 83.2938L188.54 74.8765L195.038 78.0473Z" stroke="white" />
                    <path d="M207.038 85.0473L207.038 94.1943L200.533 90.2938L200.54 81.8765L207.038 85.0473Z" stroke="white" />
                    <path d="M194.745 96.1785V116.497L175.252 105.087L175.725 86.6687L194.745 96.1785ZM184.245 110.077H185.245V91.5769H184.245V110.077Z" stroke="white" />
                </svg>

            </div>
        </div>
    );
}