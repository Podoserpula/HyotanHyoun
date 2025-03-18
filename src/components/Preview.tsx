// Preview.tsx
import React, { JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreviewProps {
	selectedBody: { id: number; title: string; svg: JSX.Element };
	bodyColor: string;
	selectedLeftEye: { id: number; title: string; svg: JSX.Element };
	leftEyeColor: string;
	selectedRightEye: { id: number; title: string; svg: JSX.Element };
	rightEyeColor: string;
	selectedLeftIris: { id: number; title: string; svg: JSX.Element };
	leftIrisColor: string;
	leftIrisSize: number;
	selectedRightIris: { id: number; title: string; svg: JSX.Element };
	rightIrisColor: string;
	rightIrisSize: number;
	selectedAccessary: { id: number; title: string; svg: JSX.Element };
	accessaryColor: string;
	direction: number;
}

const Preview: React.FC<PreviewProps> = ({
	selectedBody,
	bodyColor,
	selectedLeftEye,
	leftEyeColor,
	selectedRightEye,
	rightEyeColor,
	selectedLeftIris,
	leftIrisColor,
	leftIrisSize,
	selectedRightIris,
	rightIrisColor,
	rightIrisSize,
	selectedAccessary,
	accessaryColor,
	direction,
}) => {
	return (
		<div className="relative w-full aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden ">
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedBody.id}
					className="absolute w-full h-full"
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedBody.svg, {
							children: React.Children.map(selectedBody.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: bodyColor,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedLeftEye.id}
					className="absolute w-full h-full "
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedLeftEye.svg, {
							children: React.Children.map(selectedLeftEye.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: leftEyeColor,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedRightEye.id}
					className="absolute w-full h-full "
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedRightEye.svg, {
							children: React.Children.map(selectedRightEye.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: rightEyeColor,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedLeftIris.id}
					className="absolute w-full h-full"
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedLeftIris.svg, {
							children: React.Children.map(selectedLeftIris.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: leftIrisColor,
									r: leftIrisSize,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedRightIris.id}
					className="absolute w-full h-full"
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedRightIris.svg, {
							children: React.Children.map(selectedRightIris.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: rightIrisColor,
									r: rightIrisSize,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>


			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={selectedAccessary.id}
					className="absolute w-full h-full"
					initial={{ opacity: 0, x: direction * 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: direction * -50 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div>
						{React.cloneElement(selectedAccessary.svg, {
							children: React.Children.map(selectedAccessary.svg.props.children, (child) =>
								React.cloneElement(child, {
									fill: accessaryColor,
								})
							),
						})}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Preview;
