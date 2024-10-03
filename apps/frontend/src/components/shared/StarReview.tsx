import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export interface StarReviewProps {
    evaluation: number
    size?: number
}

export default function StarReview(props: StarReviewProps) {
    function evalToStar(evaluation: number) {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (evaluation >= i) {
                stars.push(<IconStarFilled size={props.size ?? 12} key={i} />)
            } else if (evaluation >= i - 0.5) {
                stars.push(<IconStarHalfFilled size={props.size ?? 12} key={i} />)
            } else {
                stars.push(<IconStar size={props.size ?? 12} key={i} />)
            }
        }
        return stars
    }

    return <div className="flex gap-0.5 text-emerald-400">{evalToStar(props.evaluation)}</div>
}
