import { add_country_action, get_initial_summary_data_action } from "../src/redux/actions";
import { reducer, initialState } from "../src/redux/reducer";

describe(
    'actions',
    () => {
        it(
            'Test #0: Add Country to Redux',
            () => {
                const country = "Ukraine";
                const expectedAction = {
                    type: "ADD_COUNTRY",
                    country
                }
                expect(
                    add_country_action(country)
                ).toEqual( expectedAction );
            }
        );

        it(
            'Test #2: Reducer default value',
            () => {
                expect(
                    reducer(
                        undefined,
                        {}
                    )
                ).toEqual(
                    initialState
                )
            }
        );
    }
);