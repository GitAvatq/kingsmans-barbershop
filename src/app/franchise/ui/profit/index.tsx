import React from 'react';

const Profit = () => {
    return (
        <section className="bg-gradient-to-br from-gold to-black min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] px-5 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent uppercase tracking-wider">
                    THE START IN NUMBERS
                </h2>

                <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-3 gap-6 max-lg:gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
                        <div className="text-center h-full flex flex-col justify-center">
                            <span className="text-sm text-gray-400 uppercase tracking-wider block mb-2">FROM</span>
                            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                50,000 $
                            </div>
                            <div className="text-gray-500 my-2">TO</div>
                            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                100,000 $
                            </div>
                            <div className="text-gray-300 text-lg uppercase tracking-wide mt-auto">
                                LUMP SUM PAYMENT
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 lg:col-span-2">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                                    FIRST 6 MONTHS:
                                </div>
                                <div className="text-lg font-semibold text-white mb-1">
                                    5% OF TURNOVER FROM SERVICES
                                </div>
                                <div className="text-green-400 font-medium">
                                    NO MORE THAN 5,000 $
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                                    STARTING FROM THE 7TH MONTH:
                                </div>
                                <div className="text-lg font-semibold text-white mb-1">
                                    5% OF TURNOVER FROM SERVICES
                                </div>
                                <div className="text-green-400 font-medium">
                                    NO MORE THAN 15,000 $
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
                        <div className="text-center h-full flex flex-col justify-center">
                            <span className="text-sm text-gray-400 uppercase tracking-wider block mb-2">FROM</span>
                            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                300,000$
                            </div>
                            <div className="text-gray-300 text-lg uppercase tracking-wide mt-auto">
                                COST OF OPENING A BARBERSHOP
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
                        <div className="text-center h-full flex flex-col justify-center">
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
                                FROM 11 MONTHS
                            </div>
                            <div className="text-gray-300 text-lg uppercase tracking-wide">
                                PAYBACK PERIOD
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
                        <div className="text-center h-full flex flex-col justify-center">
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
                                1-2 MONTHS
                            </div>
                            <div className="text-gray-300 text-lg uppercase tracking-wide">
                                BUSINESS LAUNCH TIME
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profit;