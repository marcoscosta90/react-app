import React, { useState } from 'react';
import useApi from 'components/utils/useApi';
import PromotionCard from 'components/Promotion/Card/Card';
import PromotionModal from 'components/Promotion/Modal/Modal';
import './List.css'

const PromotionList = ({ loading, promotions, error, refetch }) => {
    const [promotionId, setPromotionId] = useState(null);
    const [deletePromotion, deletePromotionInfo] = useApi({
        method: 'DELETE',
    });


    if (error) {
        return <div> Algo de errado nao esta certo</div>
    }
    
    if (promotions === null || deletePromotionInfo.loading) {
        return <div>Carregando....</div>
    }

    if (promotions.length === 0) {
        return <div> Nenhum resultado encontrado</div>
    }


    return (
        <div className="promotion-list">
            {promotions.map((promotion, index) => (
                <PromotionCard
                    key={index}
                    promotion={promotion}
                    onClickComments={() => setPromotionId(promotion.id)}
                    onClickDelete={async () => {
                        await deletePromotion({
                            url: `/promotions/${promotion.id}`,
                        });
                        refetch();
                    }}
                />
            ))}
            {loading &&  <div> Carregando mais promocoes .... </div>
            }
            {promotionId && (            
            <PromotionModal
                promotionId={promotionId}
                onClickClose={() => setPromotionId(null)} />
                )}
        </div>
    );
};

export default PromotionList;