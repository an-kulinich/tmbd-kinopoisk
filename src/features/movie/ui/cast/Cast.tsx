import s from "./cast.module.css";
import type {CastResponse} from "@/features/movie/lib";

type Props = {
    data: CastResponse | undefined,
}

export const Cast = ({data}: Props) => {
    return (
        <div className={s.cast_wrapper}>
            <h3>Cast</h3>
            <div className={s.actors_wrapper}>
                {data?.cast?.slice(0, 6).map(i => {
                    return (
                        <div className={s.actor_wrapper} key={i.id}>
                            <div className={s.avatar} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${i.profile_path})`}}></div>
                            <span className={s.actor_name}>{i.original_name}</span>
                            <span className={s.actor_role}>{i.character}</span>
                        </div>
                )
                })}
            </div>
        </div>
    );
};