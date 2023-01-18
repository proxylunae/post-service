import React, {useMemo} from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {

    // let pagesArray = getPagesArray(totalPages);   // hw use useMemo to not calculate array on each render

    let pagesArray = useMemo(() => {
        return getPagesArray(totalPages);
    }, [totalPages]);

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <MyButton onClick={() => changePage(p)}
                          key={p}
                          disabled={page === p}>{p}</MyButton>
            )}
        </div>
    );
};

export default Pagination;